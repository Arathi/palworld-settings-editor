import "./index.less";

interface Props {
  src?: string;
  maskAlpha?: number;
  maskAlphaAlt?: number;
}

const STEAM_CDN_BASE_URL = "https://shared.cloudflare.steamstatic.com";
const PAL_WORLD_APP_ID = 1623730;
const RESOURCE_DIR = `/store_item_assets/steam/apps/${PAL_WORLD_APP_ID}/`;
const FILE_NAME = "page_bg_raw.jpg";
const DEFAULT_SRC = `${STEAM_CDN_BASE_URL}${RESOURCE_DIR}${FILE_NAME}`;

const DEFAULT_MASK_ALPHA = 0.8;

const Background: React.FC<Props> = ({
  src = DEFAULT_SRC,
  maskAlpha = DEFAULT_MASK_ALPHA,
  maskAlphaAlt = DEFAULT_MASK_ALPHA / 2,
}) => {
  return (
    <>
      <div className="pwc-background">
        <img src={src} alt="background" />
      </div>
      <div className="pwc-mask" />
    </>
  );
};

export default Background;
