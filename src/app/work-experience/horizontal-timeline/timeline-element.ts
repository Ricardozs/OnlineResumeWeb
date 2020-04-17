export interface TimelineElement {
  isFreelance: boolean;
  date: Date;
  endDate?: Date;
  title: string;
  selected?: boolean;
  position: string;
  content: string;
}