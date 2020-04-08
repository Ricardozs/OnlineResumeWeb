export interface TimelineElement {
  caption: string;
  date: Date;
  endDate?: Date;
  title: string;
  selected?: boolean;
  position: string;
  content: string;
}