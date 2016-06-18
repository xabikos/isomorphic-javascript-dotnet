import React, {PropTypes} from 'react';

import RepositoryItem from './repositoryItem';

const RepositoriesList = (props) => (
  <div id="repositoriesList">
    {props.repositories.map(rep =>
      <RepositoryItem key={rep.id} onSelect={props.selectRepository} {...rep} />
    )}
  </div>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.array.isRequired,
  selectRepository: PropTypes.func.isRequired,
};

export default RepositoriesList;
