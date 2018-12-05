let instance;

class PubSub {
	constructor() {
		this.topics = {};
		this.id = `pubSub--id--${Date.now()}`;
	}

	subscribe(topic, listener) {
		if (!Object.prototype.hasOwnProperty.call(this.topics, topic)) {
			this.topics[topic] = [];
		}

		this.topics[topic].push(listener);

		return {
			remove() {
				instance.unsubscribe(topic, listener);
			},
		};
	}

	unsubscribe(topicToRemove, listenerToRemove) {
		if (this.topics[topicToRemove]) {
			this.topics[topicToRemove].forEach((listener, index) => {
				if (listener === listenerToRemove) {
					delete this.topics[topicToRemove][index];
				}
			});
		}
	}

	publish(topic, info = {}) {
		if (console) console.info(`Event Published: ${topic}`, info); // eslint-disable-line no-console

		if (!Object.prototype.hasOwnProperty.call(this.topics, topic)) return;

		this.topics[topic].forEach(item => item(info));
	}
}

export default function () {
	if (!instance) {
		instance = new PubSub();
	}
	return instance;
}
