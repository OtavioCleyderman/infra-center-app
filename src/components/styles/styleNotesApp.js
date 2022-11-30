import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .5rem;
  height: 100%;
  margin: 0;

.notes {
    display: flex;
    height: 100%;
}

.notes * {
    font-family: sans-serif;
}

.notes__sidebar {
    border-right: 2px solid #dddddd;
    flex-shrink: 0;
    overflow-y: auto;
    padding: 1rem .4rem ;
    width: 10rem;
}

.notes__add {
    background: #0000FF;
    border: none;
    border-radius: 7px;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 0.75rem 0;
    width: 100%;
}

.notes__add:hover {
    background: #0bbaff;
}

.notes__list-item {
    cursor: pointer;
}

.notes__list-item--selected {
    background: #eeeeee;
    border-radius: 7px;
    font-weight: bold;
}

.notes__small-title,
.notes__small-updated {
    padding: .5rem;
}

.notes__small-title {
    font-size: 1rem;
}

.notes__small-body {
    padding: 0 .8rem;
    font-size: .8rem;
}

.notes__small-updated {
    color: #aaaaaa;
    font-style: italic;
    text-align: right;
    font-size: .6rem;
}

.notes__preview {
    display: flex;
    flex-direction: column;
    padding: 1rem .8rem;
    flex-grow: 1;
}

.notes__title,
.notes__body {
    border: none;
    outline: none;
    width: 100%;
}

.notes__title {
    font-size: 1rem;
    font-weight: bold;
}

.notes__body {
    flex-grow: .2;
    font-size: .8rem;
    line-height: 1.5;
    margin-top: 2rem;
    resize: none;
    height: 2rem;
}

.save__note {
    background: #0000FF;
    color: #FFFFFF;
    border: none;
    width: 5rem;
    border-radius: 4px;
    padding: 5px;
    font-size: .8rem;
    margin-top: .8rem;
}

.save__note:hover{
    background: #0bbaff;
}


@media (min-width: 600px) {
.notes__sidebar {
    width: 18rem;
}
.notes__add {
    font-size: .9rem;
}

.notes__small-title {
    font-size: 1.2rem;
}

.notes__small-body {
    font-size: 1rem;
}

.notes__small-updated {
    font-size: .8rem;
}
.notes__title {
    font-size: 2rem;
}

.notes__body {
    flex-grow: .2;
    font-size: 1.5rem;
}
.save__note {
    width: 7rem;
    padding: 5px;
    font-size: 1rem;
    margin-top: .8rem;
}
}
`