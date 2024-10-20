import { ReactElement } from "react";
import styled from "styled-components";
import { ThemeColor, theme } from "../../theme";

type HVariants = "h1" | "h2" | "h3" | "h4" | "h5";
type PVariants = "p" | "p2" | "p3" | "p4";

export type TypographyVariant = HVariants | PVariants;

export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  color?: ThemeColor;
  className?: string;
}

const H1 = styled.h1`
  margin: 0;
  font-size: 20px;
  line-height: 2rem;
  color: ${(props) => props.color};
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${(props) => props.color};
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.color};
`;

const H4 = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.color};
`;

const H5 = styled.h5`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

const P = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.color};
`;

const P2 = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.color};
`;

const P3 = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${(props) => props.color};
`;

const P4 = styled.p`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  color: ${(props) => props.color};
`;

const variantToComponent = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  p2: P2,
  p3: P3,
  p4: P4,
};

export const TypographyRoot = ({
  children,
  variant,
  className,
  color,
}: TypographyProps): ReactElement => {
  const Component = variantToComponent[variant];
  const hexColor = color ? theme[color] : theme.paragraph;

  return (
    <Component className={className} color={hexColor}>
      {children}
    </Component>
  );
};

const bindVariant = (variant: TypographyVariant) => {
  return (props: Omit<TypographyProps, "variant">): ReactElement => {
    return <TypographyRoot {...props} variant={variant} />;
  };
};

export const Typography = Object.assign(TypographyRoot, {
  H1: bindVariant("h1"),
  H2: bindVariant("h2"),
  H3: bindVariant("h3"),
  H4: bindVariant("h4"),
  H5: bindVariant("h5"),
  P: bindVariant("p"),
  P2: bindVariant("p2"),
  P3: bindVariant("p3"),
  P4: bindVariant("p4"),
});

export type TypographyType<
  Key extends keyof typeof Typography = keyof typeof Typography
> = (typeof Typography)[Key];
