export class Section {
  constructor(
    public header: string,
    public type: string,
    public content: any
  ) {}

  public inEditMode? = false;
}
