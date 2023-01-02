import React from 'react'
import Content from './index'
import Store from '../store'
import { StoreContext } from '../../context'
import { render, fireEvent, screen } from '@testing-library/react'

const mockArticleData = {
    data: [
        {
            articleId: '4',
            title: '4. 产品经理必备的5类原型部件，你知道几个？',
            content:
                ' 这是Kevin的第868篇原创    做产品经理多年来，我最喜欢的原型工具就是axure，主要因为原型工具用的顺手就行，在没有团队强制要求下我会选择这类工具。随着时间变化，产品经理本身原型工具的选择...',
            comment: undefined,
            user: {
                userId: 'userA',
                userName: '测试账号A'
            },
            comments: 33,
            laud: 55,
            star: 135
        },
        {
            articleId: '10',
            title: '10. 产品经理必备的5类原型部件，你知道几个？',
            content:
                ' 这是Kevin的第868篇原创    做产品经理多年来，我最喜欢的原型工具就是axure，主要因为原型工具用的顺手就行，在没有团队强制要求下我会选择这类工具。随着时间变化，产品经理本身原型工具的选择...',
            comment: undefined,
            user: {
                userId: 'userC',
                userName: '测试账号C'
            },
            comments: 33,
            laud: 155,
            star: 55
        },
        {
            articleId: '5',
            title: '5. 产品经理必备的5类原型部件，你知道几个？',
            content:
                ' 这是Kevin的第868篇原创    做产品经理多年来，我最喜欢的原型工具就是axure，主要因为原型工具用的顺手就行，在没有团队强制要求下我会选择这类工具。随着时间变化，产品经理本身原型工具的选择...',
            comment: undefined,
            user: {
                userId: 'userA',
                userName: '测试账号A'
            },
            comments: 33,
            laud: 55,
            star: 35
        },
        {
            articleId: '2',
            title: '2. 产品经理必备的5类原型部件，你知道几个？',
            content:
                ' 这是Kevin的第868篇原创    做产品经理多年来，我最喜欢的原型工具就是axure，主要因为原型工具用的顺手就行，在没有团队强制要求下我会选择这类工具。随着时间变化，产品经理本身原型工具的选择...',
            comment: undefined,
            user: {
                userId: 'userA',
                userName: '测试账号A'
            },
            comments: 33,
            laud: 55,
            star: 35
        },
        {
            articleId: '1',
            title: '1. 产品经理必备的5类原型部件，你知道几个？',
            content:
                ' 这是Kevin的第868篇原创    做产品经理多年来，我最喜欢的原型工具就是axure，主要因为原型工具用的顺手就行，在没有团队强制要求下我会选择这类工具。随着时间变化，产品经理本身原型工具的选择...',
            comment: undefined,
            user: {
                userId: 'userA',
                userName: '测试账号A'
            },
            comments: 33,
            laud: 55,
            star: 35
        }
    ],
    totalCount: 10,
    pageIdx: 0,
    pageSize: 5
}

const mockMoreArticleData = {
    data: [
        {
            articleId: '8',
            title: '8. 产品经理必备的5类原型部件，你知道几个？',
            content:
                ' 这是Kevin的第868篇原创    做产品经理多年来，我最喜欢的原型工具就是axure，主要因为原型工具用的顺手就行，在没有团队强制要求下我会选择这类工具。随着时间变化，产品经理本身原型工具的选择...',
            comment: undefined,
            user: {
                userId: 'userM',
                userName: '测试账号M'
            },
            comments: 33,
            laud: 55,
            star: 135
        }
    ],
    totalCount: 10,
    pageIdx: 1,
    pageSize: 5
}

const mockUserData = {
    data: [
        {
            _id: {},
            userId: 'userF',
            userName: '测试账号F',
            pic: '',
            lauds: 1121,
            total: 622331
        },
        {
            _id: {},
            userId: 'userH',
            userName: '测试账号H',
            pic: '',
            lauds: 1100,
            total: 331387
        },
        {
            _id: {},
            userId: 'userB',
            userName: '测试账号B',
            pic: '',
            lauds: 351,
            total: 9823341
        },
        {
            _id: {},
            userId: 'userE',
            userName: '测试账号E',
            pic: '',
            lauds: 111,
            total: 22331
        },
        {
            _id: {},
            userId: 'userA',
            userName: '测试账号A',
            pic: '',
            lauds: 35,
            total: 523341
        }
    ],
    totalCount: 8,
    pageIdx: 0,
    pageSize: 5
}

const mockAnotherUserData = {
    data: [
        {
            _id: {},
            userId: 'userN',
            userName: '测试账号N',
            pic: '',
            lauds: 1121,
            total: 622331
        }
    ],
    totalCount: 8,
    pageIdx: 1,
    pageSize: 5
}

jest.mock('../../api', () => {
    return {
        GetArticleList: jest.fn().mockImplementation((pageIdx) => {
            return Promise.resolve({
                success: true,
                data: {
                    ...mockMoreArticleData,
                    pageIdx
                }
            })
        }),
        GetRecommendUsers: jest.fn().mockImplementation((pageIdx) => {
            return Promise.resolve({
                success: true,
                data: {
                    ...mockAnotherUserData,
                    pageIdx
                }
            })
        })
    }
})

const mockStore = {
    articleData: mockArticleData,
    userData: mockUserData,
    loading: false,
    userLoading: false
}

const renderMobxComponent = (initialState = {}, props = {}) => {
    const store = new Store()
    store.hydrate(initialState)
    const element = React.createElement(StoreContext.Provider, { value: store }, React.createElement(Content, props))
    render(element)
    return { fireEvent, screen }
}

const getElement = () => document.getElementById('home-page')

describe('test Home Content', () => {
    test('test Home Content with data', async () => {
        renderMobxComponent(mockStore)
        await screen.findAllByText('测试账号A')
        expect(getElement()).toMatchSnapshot('When Home Content rendered with full data')

        fireEvent.click(await screen.findByText('加载更多'))
        await screen.findAllByText('测试账号M')
        expect(getElement()).toMatchSnapshot('After click more button')

        fireEvent.click(await screen.findByText('换一批'))
        await screen.findAllByText('测试账号N')
        expect(getElement()).toMatchSnapshot('After click change users button')
    })
})
