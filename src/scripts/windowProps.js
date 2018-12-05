import events from './pubSub/pubSub';

window.pubsub = {
	events: events(),
};

export default window.pubsub;
