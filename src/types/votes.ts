export type VoteType = "good" | "neutral" | "bad";

export interface VoteState {
  good: number;
  neutral: number;
  bad: number;
}
