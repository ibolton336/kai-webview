import { AnalysisFormData } from "./views/ConfigurationForm";

export type ViewApiRequest<K extends keyof ViewApi = keyof ViewApi> = {
  type: "request";
  id: string;
  key: K;
  params: Parameters<ViewApi[K]>;
};

export type ViewApiResponse = {
  type: "response";
  id: string;
  value: unknown;
};

export type ViewApiError = {
  type: "error";
  id: string;
  value: string;
};

export type ViewApiEvent<K extends keyof ViewEvents = keyof ViewEvents> = {
  type: "event";
  key: K;
  value: Parameters<ViewEvents[K]>;
};

export type ViewApi = {
  retrieveAndCheckSettings: () => Promise<unknown>;
  runAnalysis: () => Promise<unknown>;
  showApp?: () => void;
  sendMessageToApp: (msg: string) => void;
  sendAnalysisFormData: (data: AnalysisFormData) => void;
};

export type ViewEvents = {
  analysisFormData: (data: AnalysisFormData) => void;
};
