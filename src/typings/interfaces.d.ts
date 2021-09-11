interface DefaultProps
  extends React.HTMLAttributes<any>,
    React.DOMAttributes<any>,
    React.RefAttributes<any> {
  id?: string;
  title?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface PageProps extends DefaultProps {
  location: Location;
}