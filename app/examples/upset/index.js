import { simpsons } from '../util/datasets';
import showComponent from '../util/showComponent';
import UpSet from '../../../components/UpSet';

window.onload = () => {
  showComponent(UpSet, 'div', {
    data: simpsons,
    id: 'Name',
    sets: [
      'Male',
      'Power Plant',
      'Evil',
      'Blue Hair',
      'Duff Fan',
      'School'
    ],
    fields: ['School'],
    metadata: ['Age']
  });
};
