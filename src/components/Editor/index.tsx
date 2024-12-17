import type OptionSettings from "@/domains/palworld-schema";
import { Flex, Form, Input, Button as AntdButton } from "antd";
import FormItem from "@/components/palworld-ui/FormItem";
import Button from "../palworld-ui/Button";
import { useEffect, useMemo, useState } from "react";
import { DefaultOptionSettings, Difficulty } from "@/domains/palworld-schema";
import Segmented from "../palworld-ui/Segmented";
import FormItemGroup from "../FormItemGroup";
import {
  server as serverItems,
  difficulty as difficultyItems,
  other as otherItems,
} from "@/domains/groups";
import store from "@/store";
import { useWindowSize } from "@/hooks/use-window-size";
import { useSnapshot } from "valtio";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./index.less";

type EditorAdditionProps = {
  values?: OptionSettings;
};

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> &
  EditorAdditionProps;

const Editor: React.FC<Props> = ({ values }) => {
  const windowSize = useWindowSize();
  const snap = useSnapshot(store);
  const [form] = Form.useForm();

  const [optionSettings, setOptionSettings] = useState(DefaultOptionSettings);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.None);
  const [headerHeight] = useState(64);
  const [footerHeight] = useState(64);
  const [openPreview, setOpenPreview] = useState(false);

  const contentHeight = useMemo(() => {
    return windowSize.height - headerHeight - footerHeight;
  }, [windowSize, headerHeight, footerHeight]);

  const toggleIcon = useMemo(() => {
    if (openPreview) return <RightOutlined />;
    return <LeftOutlined />;
  }, [openPreview]);

  const previewDisplay = useMemo(() => {
    if (openPreview) return undefined;
    return "none";
  }, [openPreview]);

  const preview = useMemo(() => {
    return generate(optionSettings);
  }, [optionSettings]);

  useEffect(() => {
    console.info("难度切换到", difficulty);
    switch (difficulty) {
      case Difficulty.Casual:
        break;
      case Difficulty.Normal:
        break;
      case Difficulty.Hard:
        break;
    }
  }, [difficulty]);

  function toggle() {
    setOpenPreview(!openPreview);
  }

  function generate(optionSettings: OptionSettings) {
    const values: string[] = [];
    for (const fieldName in optionSettings) {
      const key = fieldName as keyof OptionSettings;
      const value = optionSettings[key];
      const defaultValue = DefaultOptionSettings[key];
      if (value === defaultValue) {
        continue;
      }

      let formattedValue = value;
      switch (typeof value) {
        case "string":
          if (
            key === "Difficulty" ||
            key === "DeathPenalty" ||
            key === "AllowConnectPlatform" ||
            key === "LogFormatType"
          ) {
            formattedValue = `${value}`;
          } else {
            formattedValue = `"${value}"`;
          }
          break;
        case "boolean":
          if (value) {
            formattedValue = "True";
          } else {
            formattedValue = "False";
          }
          break;
      }
      values.push(`${key}=${formattedValue}`);
    }
    return `[/Script/Pal.PalGameWorldSettings]
OptionSettings=(${values.join(",")})`;
  }

  return (
    <div className="editor">
      <Form
        form={form}
        className="editor-form"
        colon={false}
        labelCol={{ span: 12 }}
        labelAlign="left"
        initialValues={optionSettings}
        onValuesChange={(patch, values) => {
          console.debug("表单发生变化：", patch);
          setOptionSettings(values);
        }}
      >
        <div className="editor-header">
          <FormItem
            label="配置分组"
            style={{
              "--pwc-form-item-row-height": "48px",
            }}
          >
            <Segmented
              value={store.group}
              onChange={(value) => {
                console.info("切换配置分组：", value);
                store.group = value;
              }}
              options={[
                { value: "server", label: "服务器设置" },
                { value: "difficulty", label: "难度设置" },
                { value: "other", label: "其他设置" },
              ]}
            />
          </FormItem>
        </div>
        <div className="editor-content">
          <FormItemGroup
            height={contentHeight}
            // @ts-ignore
            items={serverItems}
            style={{
              display: snap.group === "server" ? undefined : "none",
            }}
          />
          <FormItemGroup
            height={contentHeight}
            header={
              <FormItem label="难度">
                <Segmented
                  value={difficulty}
                  onChange={(value) => setDifficulty(value)}
                  options={[
                    { value: Difficulty.Casual, label: "休闲" },
                    { value: Difficulty.Normal, label: "普通" },
                    { value: Difficulty.Hard, label: "困难" },
                    { value: Difficulty.None, label: "自定义" },
                  ]}
                />
              </FormItem>
            }
            // @ts-ignore
            items={difficultyItems}
            style={{
              display: snap.group === "difficulty" ? undefined : "none",
            }}
          />
          <FormItemGroup
            height={contentHeight}
            // @ts-ignore
            items={otherItems}
            style={{
              display: snap.group === "other" ? undefined : "none",
            }}
          />
        </div>
        <div className="editor-footer">
          <Flex gap={8} justify="center" flex={1}>
            <Button>设置</Button>
            <Button>打开</Button>
            <Button>保存</Button>
          </Flex>
          <AntdButton
            variant="solid"
            color="primary"
            icon={toggleIcon}
            onClick={() => toggle()}
          />
        </div>
      </Form>
      <div
        className="editor-preview"
        style={{
          display: previewDisplay,
        }}
      >
        <Input.TextArea
          disabled
          value={preview}
          style={{
            margin: 8,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
