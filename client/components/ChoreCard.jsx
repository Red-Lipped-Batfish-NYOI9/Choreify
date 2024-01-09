/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useGetAllChoresQuery } from '../redux/api/chores/choresApi.js';
import '../styles.css';

export default function ChoreCard() {
  const { data } = useGetAllChoresQuery();

  return (
    <div id="lane">
      <h2>Chores Not Started</h2>
      {data ? (
        <p>
          Chore:
          {' '}
          {data[0].title}
        </p>
      ) : null}
      {data ? (
        <p>
          Description:
          {' '}
          {data[0].description}
        </p>
      ) : null}
      {data ? (
        <p>
          Created Date:
          {' '}
          {data[0].created_date}
        </p>
      ) : null}
      {data ? (
        <p>
          Due Date:
          {' '}
          {data[0].due_date}
        </p>
      ) : null}
    </div>
  );
}
