const isProd = process.env.NODE_ENV === 'production'

export const GA_TRACKING_ID = isProd ? process.env.REACT_APP_GA_TRACKING_RELEASE_KEY : process.env.REACT_APP_GA_TRACKING_DEV_KEY

export const sendPerformance = (category: string) => {
  if (window.performance) {
    const timeSincePageLoad = Math.round(performance.now());
    gtag('event', 'timing_complete', {
      name: 'load',
      value: timeSincePageLoad,
      event_category: category
    });
  }
}

interface IPageView {
  pageTitle: string;
  pageLocation: string
  pagePath: string;
}

export const pageView = ({
  pageTitle,
  pageLocation,
  pagePath
}: IPageView) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_title: pageTitle,
    page_location: pageLocation,
    page_path: pagePath
  })
}

interface IGAEvent {
  eventName: string;
  eventCategory: string;
  eventLabel: string;
  value?: string
}

export const pageEvent = ({
  eventName,
  eventCategory,
  eventLabel,
  value
}: IGAEvent) => {
  window.gtag('event', eventName, {
    event_category: eventCategory,
    event_label: eventLabel,
    value: value
  })
}

export const getPageName = (url: string) => {
  if (url.includes('/')) {
    return EGA_PAGE_NAME.HOME
  } else if (url.includes('/about')) {
    return EGA_PAGE_NAME.ABOUT
  } else if (url.includes('/category')) {
    if (url.split('/').length === 3) {
      return EGA_PAGE_NAME.CATEGORY
    } else {
      return EGA_PAGE_NAME.CATEGORY_ID
    }
  } else if (url.includes('/post')) {
    return EGA_PAGE_NAME.POST_ID
  } else if (url.includes('/license')) {
    return EGA_PAGE_NAME.LICENSE
  } else {
    return EGA_PAGE_NAME.C404
  }
  return ''
}

/**
 * [PABE_NAME, EVENT_PROPERTY, EVENT_NAME] 순으로 작성
 * @param events 
 * @returns 
 */
export const generateEventName = (events: string[]) => {
  return events.reduce((acc, cur) => acc + ' | ' + cur)
}

export enum EGA_PAGE_NAME {
  'HOME'='홈',
  'ABOUT'='소개',
  'CATEGORY'='카테고리_메인',
  'CATEGORY_ID'='카테고리_서브',
  'POST_ID'='포스트',
  'C404'='404페이지',
  'LICENSE'='라이선스',
  'FOOTER'='푸터',
  'SEARCH_POPUP'='검색_팝업'
}

export enum EGA_EVENT_PROPERTY {
  'RELATED_POSTS'='관련_포스트',
  'RANDOM_POSTS'='랜덤_포스트',
  'MAIN_SLIDE'='메인_슬라이드',
  'MAIN_GRID'='메인_그리드',
  'SEARCH_CARD'='검색_카드',
  'GITHUB'='깃허브',
  'LINKEDIN'='링크드인',
  'SHARE_LINK'='링크_공유'
}

export enum EGA_EVENT_NAME {
  'ROUTE'='앱_내_페이지_이동',
  'ITEM_CLICK'='아이템_클릭',
  'LEAVE_COMMENT'='댓글_작성',
  'SEARCH'='검색_하기',
  'MOVE'='외부_링크_이동',
}
