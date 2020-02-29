import test from 'ava';
import * as {{pkg}} from '../{{pkg}}';

test('should init', t => {
	const actual = new {{pkg}}();

	t.assert(actual);
});
