export const event = {
  _id: '',
  set id(data) {
   this._id = data;
},
  get id() {
   return this._id;
},
  _calendarId: '',
  set calendarId(data) {
  this._calendarId = data;
},
  _title:'',
  _body: '',
  _isAllday: '',
  _start: '',
  _end: '',
  _goingDuration: 0,
  _comingDuration: 0,
  _location: '',
  _attendees: [],
  _category: '',
  _dueDateClass: '',
  _recurrenceRule: '',
  _state: '',
  _isVisible: true,
  _isPending: false,
  _isFocused: false,
  _isReadOnly: false,
  _isPrivate: false,
  _color: '',
  _backgroundColor: '',
  _dragBackgroundColor: '',
  _borderColor: '',
  _customStyle: {},
  _raw: [],
};
