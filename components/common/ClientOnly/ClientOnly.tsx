import * as React from 'react';

interface Props {
  children: JSX.Element;
}

export const ClientOnly: React.FC<Props> = ({ children }: Props): JSX.Element | null => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return children;
};
