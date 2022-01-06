interface EventManagerInterface {
  clear(): void;
  events: Map<string, FunctionConstructor[]>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, callback: (...args: any[]) => any): this;
  off(event: string): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(event: string, ...args: any[]): boolean;
}

const EventManager: EventManagerInterface = {
  events: new Map<string, FunctionConstructor[]>(),

  clear() {
    this.events = new Map();
  },

  on(event: string, callback: FunctionConstructor) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    this.events.get(event)?.push(callback);

    return this;
  },

  off(event: string) {
    this.events.delete(event);
    return this;
  },

  emit(event: string, ...args) {
    if (!this.events.has(event)) {
      return false;
    }

    this.events.get(event)?.forEach((callback): void => {
      setTimeout(() => callback.call(null, ...args), 0);
    });

    return true;
  },
};

export default EventManager;
