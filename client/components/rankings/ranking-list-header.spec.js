/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import RankingListHeader from './ranking-list-header'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('RankingListHeader', () => {
  let rankingListHeader

  beforeEach(() => {
    rankingListHeader = shallow(<RankingListHeader parsedName = { `2017 - America's 100 Greatest Public Courses` } publisherName = 'Golf Digest Magazine' />)
  })

  it('renders the list in a rankingListHeader class', () => {
    expect(rankingListHeader.find('div.rankingListHeader').text()).to.be.equal(`2017 - America's 100 Greatest Public Courses`)
  })

  it('renders the location in a rankingListHeaderSubtext class', () => {
    expect(rankingListHeader.find('div.rankingListHeaderSubtext').text()).to.be.equal(`Golf Digest Magazine`)
  })
})
