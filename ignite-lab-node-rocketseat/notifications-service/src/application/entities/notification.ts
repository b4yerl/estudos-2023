import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;
  private _id: string

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  // recipientId 

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  // content

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  // category

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  // readAt

  public get readAt(): Date | null | undefined{
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  // createdAt

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}