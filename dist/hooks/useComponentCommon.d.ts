import { TextComponentProps } from '../defaultProps';
declare const useComponentCommon: (props: Readonly<Partial<TextComponentProps>>, picks: string[]) => {
    styleProps: import("vue").ComputedRef<Partial<Readonly<Partial<TextComponentProps>>>>;
    handleClick: () => void;
};
export default useComponentCommon;
