import { Model } from "@vuex-orm/core";
import { Block } from "@/store/models/Block";

export class Line extends Model {
  static entity = "lines";

  static fields() {
    return {
      id: this.string(""),
      sourceId: this.string(""),
      sourceNode: this.string(0),
      targetId: this.string(0),
      targetNode: this.string(0),
    };
  }

  get sourcePoint() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Block.find(this.sourceId)[this.sourceNode];
  }

  get targetPoint() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Block.find(this.targetId)[this.targetNode];
  }
  id!: string;
  sourceId!: string;
  sourceNode!: string;
  targetId!: string;
  targetNode!: string;
}
