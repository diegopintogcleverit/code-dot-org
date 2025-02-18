import React from 'react';
import ParticipantSections from './ParticipantSections';
import {action} from '@storybook/addon-actions';

const sections = [
  {
    name: 'Algebra Period 1',
    teacherName: 'Ms. Frizzle',
    linkToProgress: 'to Progress tab',
    assignedTitle: 'CS in Algebra',
    linkToAssigned: 'to Course',
    numberOfStudents: 14,
    linkToStudents: 'to Manage Students tab',
    code: 'ABCDEF'
  },
  {
    name: 'Algebra Period 2',
    teacherName: 'Ms. Frizzle',
    linkToProgress: 'to Progress tab',
    assignedTitle: 'CS in Algebra',
    linkToAssigned: 'to Course',
    numberOfStudents: 19,
    linkToStudents: 'to Manage Students tab',
    code: 'EEB206'
  },
  {
    name: 'Period 3',
    teacherName: 'Ms. Frizzle',
    linkToProgress: 'to Progress tab',
    assignedTitle: 'Course 4',
    linkToAssigned: 'to Course',
    numberOfStudents: 22,
    linkToStudents: 'to Manage Students tab',
    code: 'HPRWHG'
  }
];

export default storybook =>
  storybook
    .storiesOf('Homepages/Students/ParticipantSections', module)
    .withReduxStore()
    .addStoryTable([
      {
        name: 'Sections - student, no sections yet',
        description:
          'shows a join sections component with attention-grabbing dashed border',
        story: () => (
          <ParticipantSections
            sections={[]}
            updateSectionsResult={action('update sections result')}
            updateSections={action('update sections')}
          />
        )
      },
      {
        name: 'Sections - student, enrolled in sections',
        description:
          'shows a sections table, no column for leave buttons, and a solid border join section component',
        story: () => (
          <ParticipantSections
            sections={sections}
            updateSectionsResult={action('update sections result')}
            updateSections={action('update sections')}
          />
        )
      },
      {
        name:
          'Sections - teacher, enrolled in sections as a student and does have permission to leave the sections',
        description:
          'shows a sections table, including a column for leave buttons, and a solid border join section component',
        story: () => (
          <ParticipantSections
            sections={sections}
            isTeacher={true}
            updateSectionsResult={action('update sections result')}
            updateSections={action('update sections')}
          />
        )
      },
      {
        name:
          'PL Sections - teacher, enrolled in sections as a student and does have permission to leave the sections',
        description:
          'shows a sections table, including a column for leave buttons, and a solid border join section component',
        story: () => (
          <ParticipantSections
            sections={sections}
            isTeacher={true}
            updateSectionsResult={action('update sections result')}
            updateSections={action('update sections')}
            isPlSections={true}
          />
        )
      }
    ]);
