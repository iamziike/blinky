declare module "*.svg" {
  const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

declare module "*.gif" {
  const path: string;

  export default path;
}
