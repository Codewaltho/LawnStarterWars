import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../assets/loader";

export const PersonDetailsColumn = props =>
  props.info.detailColumn !== undefined ? (
    <div>
      <span>Birth Year: {props.info.detailColumn.birth_year}</span>
      <span>Gender: {props.info.detailColumn.gender}</span>
      <span>Eye Color: {props.info.detailColumn.eye_color}</span>
      <span>Hair Color: {props.info.detailColumn.hair_color}</span>
      <span>Height: {props.info.detailColumn.height}</span>
      <span>Mass: {props.info.detailColumn.mass}</span>
    </div>
  ) : (
    <Loader />
  );

export const PersonMovieColumn = props =>
  props.info.movies !== undefined ? (
    props.info.movies.map((item, i) => (
      <NavLink
        key={`${item}-${i}`}
        to={{
          pathname: `/details/movies/${item.title}`,
          state: { url: item.url }
        }}
      >
        <span style={{ fontSize: "14px" }}>{item.title}</span>
      </NavLink>
    ))
  ) : (
    <Loader />
  );

export const MovieDetailsColumn = props =>
  props.info.detailColumn !== undefined ? (
    <div>
      {props.info.detailColumn.opening_crawl
        .split("\n")
        .map((item, i) =>
          item.length > 1 ? (
            <span key={`${item}-${i}`}>{item}</span>
          ) : (
            <br key={`${item}-${i}`} />
          )
        )}
    </div>
  ) : (
    <Loader />
  );

export const MoviePeopleColumn = props =>
  props.info.movies !== undefined ? (
    props.info.movies.map((item, i) =>
      i === props.info.movies.length - 1 ? (
        <NavLink
          key={`${item}-${i}`}
          to={{
            pathname: `/details/people/${item.name}`,
            state: { url: item.url }
          }}
          style={{
            display: "inline-block",
            textDecoration: "none"
          }}
        >
          <div style={{ fontSize: "14px" }}>{item.name}</div>
        </NavLink>
      ) : (
        <NavLink
          key={`${item}-${i}`}
          to={{
            pathname: `/details/people/${item.name}`,
            state: { url: item.url }
          }}
          style={{
            display: "inline-block",
            textDecoration: "none"
          }}
        >
          <div style={{ fontSize: "14px" }}> {`${" "} ${item.name}`}, </div>
        </NavLink>
      )
    )
  ) : (
    <Loader />
  );
