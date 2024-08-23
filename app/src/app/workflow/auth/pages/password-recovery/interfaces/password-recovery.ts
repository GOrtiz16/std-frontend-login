export interface Time {
  milliseconds: number;
}

export interface Channel {
  code: string;
  name: string;
  description: string;
}

export interface Key {
  value: string;
  id: string;
}

export interface Keyboard {
  seed: string;
  keys: Key[];
}

export interface InfoInterface {
  time: Time;
  channel: Channel;
  keyboard: Keyboard;
}
