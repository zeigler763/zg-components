export interface CommonComponentProps {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: string;
    position: string;
    left: string;
    top: string;
    right: string;
}
export declare const commonDefaultProps: CommonComponentProps;
export interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
}
export interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export declare type PartialTextComponentProps = Partial<TextComponentProps>;
export declare const textDefaultProps: TextComponentProps;
export declare const imageDefaultProps: ImageComponentProps;
export declare const textStylePropNames: string[];
export declare const imageStylePropsNames: string[];
export declare const isEditingProp: {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const transformToComponentProps: <T extends {
    [key: string]: any;
}>(props: T) => { [P in keyof T]: {
    type: any;
    default: T[keyof T];
}; } & {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
