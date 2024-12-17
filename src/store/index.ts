import { proxy } from "valtio";

const DEFAULT_EDITOR_WIDTH = 1280;
export type Group = "server" | "difficulty" | "other";

interface State {
  editorWidth: number;
  group: string;
}

const store = proxy<State>({
  editorWidth: DEFAULT_EDITOR_WIDTH,
  group: "difficulty",
});

export default store;
