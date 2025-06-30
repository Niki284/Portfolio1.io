import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons({ link }) {
  return (
    <div className="button-wrapper">
      <Link className="btn-primary" to={`/detail/${link}`}>
        Meer bekijken →
      </Link>
    </div>
  );
}

