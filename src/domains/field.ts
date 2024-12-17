export enum FieldType {
  Integer = "integer",
  Float = "float",
  Boolean = "boolean",
  String = "string",
  Enum = "enum",
}

export default interface Field {
  name: string;
  type: FieldType;
  defaultValue: string;
}
