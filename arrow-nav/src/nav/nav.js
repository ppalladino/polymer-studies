define('nav', [], function() {
  var NAV_ITEM_CLASS = 'nav-item';
  var NAV_GROUP_CLASS = 'nav-group';

  var navBehaviors = {
    NEXT_NAV_ITEM: 'NEXT_NAV_ITEM',
    PREV_NAV_ITEM: 'PREV_NAV_ITEM',
    NEXT_NAV_GROUP: 'NEXT_NAV_GROUP',
    PREV_NAV_GROUP: 'PREV_NAV_GROUP',
    NOOP: 'NOOP',
  };

  function getNavGroupList(doc) {
    return _listifyHtmlCollection(_getNavGroupsElements(doc));
  }

  function getNavItemList(navGroup) {
    return _listifyHtmlCollection(_getNavItemElements(navGroup));
  }

  function _listifyHtmlCollection(htmlCollection) {
    var list = [];
    var lastIdx = htmlCollection.length - 1;
    for(var i = 0; i <= lastIdx; i++) {
      var isFirst = i === 0;
      var isLast = i === lastIdx;
      list.push({
        idx: i,
        isLast: isLast,
        isFirst: isFirst,
        nextIdx: isLast ? 0 : i + 1,
        prevIdx: isFirst ? lastIdx : i - 1,
        element: htmlCollection.item(i),
      });
    }
    return list;
  }
  function _getNavItemElements (navGroup) {
    return navGroup.element.querySelectorAll('[nav-group="' + navGroup.element.navGroupName + '"]');
  }
  function _getNavGroupsElements (doc) {
    return doc.querySelectorAll('[is="my-nav-group"]');
  }

  return {
    getNavGroupList: getNavGroupList,
    getNavItemList: getNavItemList,
    navBehaviors: navBehaviors,
  }
});
