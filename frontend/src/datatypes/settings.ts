export enum AssignmentDisplayType {
    LINETHICKNESS = "LINETHICKNESS",
    LINEHEIGHT = "LINEHEIGHT",
    LINECONNECTOR = "LINECONNECTOR",
    NUMBERBLOCKS = "NUMBERBLOCKS",
    GLYPHBLOCKS = "GLYPHBLOCKS",

}
export enum EvaluationDirection {
    DELETION = "DELETION",
    INSERTION = "INSERTION",
}

export enum ColourPalette {
    RB = "RB",
    GB = "GB",
}
export enum CurveInterpolation {
    LINEAR = "LINEAR",
    CATMULLROM = "CATMULLROM",
    STEP = "STEP",
}
export enum Operator {
    START_WITH = "START_WITH",
    END_WITH = "END_WITH",
    EQUAL = "EQUAL",
    CONTAIN = "CONTAIN",
    SEMANTIC_EQUAL = "SEMANTIC_EQUAL",
    ENTAIL = "ENTAIL",
    CONTRADICT = "CONTRADICT",
}
export enum AssignmentPreset {
    NONE = "NONE",
    WORD = "WORD",
    SENTENCE = "SENTENCE",
    PARAGRAPH = "PARAGRAPH",
    // SYNTAX-TREE = "SYNTAX-TREE",
}
export enum TemplatePreset {
    NONE = "NONE",
    QA = "QA",
    QA_WITH_OPTIONS = "QA_WITH_OPTIONS",
    QA_WITH_CONTEXT = "QA_WITH_CONTEXT",
    SENTIMENT = "SENTIMENT",
}
export enum UsageMode {
    STANDARD = "STANDARD",
    STUDY_P1 = "STUDY_P1",
    STUDY_P2 = "STUDY_P2",
}
export interface DisplaySettings {
    assignmentDisplayType: AssignmentDisplayType;
    colourPalette: ColourPalette;
    curveInterpolation: CurveInterpolation;
    usageMode: UsageMode;

}