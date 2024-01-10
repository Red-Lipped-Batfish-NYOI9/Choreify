/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useGetAllChoresQuery } from '../redux/api/chores/choresApi.js';
import '../styles.css';

export default function ChoreCard(props) {
  const { data } = useGetAllChoresQuery();

  return (
    <div id="lane">
      <h2>Chores Not Started</h2>
      {data ? (
        <p>
          Chore:
          {' '}
          {props.title}
        </p>
      ) : null}
      {data ? (
        <p>
          Description:
          {' '}
          {props.description}
        </p>
      ) : null}
      {data ? (
        <p>
          Created Date:
          {' '}
          {props.created_date}
        </p>
      ) : null}
      {data ? (
        <p>
          Due Date:
          {' '}
          {props.due_date}
        </p>
      ) : null}
    </div>
  );
}
