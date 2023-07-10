declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.ttf" {
  import { FontSource } from "expo-font";
  const value: FontSource;
  export default value;
}
