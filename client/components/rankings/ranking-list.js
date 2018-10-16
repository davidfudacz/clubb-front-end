import React from 'react'
import PropTypes from 'prop-types'
import RankingListHeader from './ranking-list-header'
import IndividualRank from './individual-rank'
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { defaultBorder, primaryColor } from '../../styles'

let mainStyle = {
  ...defaultBorder,
  display: 'flex',
  flexDirection: 'column',
}

const headerStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
}

const headerSubtextStyle = {
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}


const RankingList = ({ rankingListId }) => {
  const query = gql`
    {
      rankingList(id: ${ rankingListId }) {
        parsedName
        publisher {
          name
        }
        rankings {
          id
          rank
          course {
            originalBuild {
              architects {
                fullname
              }
              year
            }
            parsedName
            parsedLocationAbbreviated
          }
        }
      }
    }
  `
  return (
    <Query query={ query }>
      {({ loading, error, data : { rankingList } }) => {
        if (loading) return null;
        if (error) console.log('this is an error')
        if (!rankingList) return <div style={ mainStyle }>Sorry, that doesnt exist!</div>
        return (
          <div style={mainStyle}>
            <RankingListHeader parsedName = { rankingList.parsedName } publisherName = { rankingList.publisher.name } />
            {
              rankingList.rankings.map(({ id, rank, course }) => 
                <IndividualRank key = { id } rank = { rank } course = { course } />
              )
            }
          </div>
        )
      }}
    </Query>
  )
}

export default RankingList

/**
 * PROP TYPES
 */
RankingList.propTypes = {
}