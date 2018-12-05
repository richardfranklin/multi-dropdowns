import './windowProps';
import Events from './pubSub/pubSubConstants';

const firstDropdown = document.querySelector('[data-select-no="1"]');

firstDropdown.addEventListener('change', (e) => {
	// console.log(e.target.value);
	window.pubsub.events.publish(Events.DROPDOWN_CHANGED, { payload: e.target.value });
});

const callbackHere = (info) => {
	console.log(`${info.payload} selected`);
};

(function () {
	window.pubsub.events.subscribe(Events.DROPDOWN_CHANGED, callbackHere);
}());
