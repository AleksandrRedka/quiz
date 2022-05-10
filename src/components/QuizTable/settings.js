export default {
	config: [
		{
			id: 1,
			header: '',
			field: 'title',
			type: "text",
			default: '',
			className: '',
		},
		{
			id: 2,
			header: 'save as template',
			field: 'saved',
			type: "switch",
			default: 'false',
			className: '',
		},
		{
			id: 3,
			header: 'Creations Date',
			field: 'created',
			type: "date",
			default: '-',
			className: '',
		},
		{
			id: 4,
			header: 'edited',
			field: 'edited',
			type: "date",
			default: '-',
			className: '',
		},
		{
			id: 5,
			header: 'send before',
			field: 'sendBefore',
			type: "date",
			default: '-',
			className: '',
		},
		{
			id: 6,
			header: '',
			field: '',
			type: "actions",
			default: '',
			className: 'quiz-item-actions',
		},
	]
}
