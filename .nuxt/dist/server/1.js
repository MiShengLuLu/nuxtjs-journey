exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles',
    params
  });
}; // 获取用户关注的文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles/${slug}/favorite`
  });
}; // 删除点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComment = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles/${slug}/comments`,
    data
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=5cacbfc6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=5cacbfc6&

// EXTERNAL MODULE: ./apis/article.js
var apis_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/meta.vue?vue&type=template&id=469beaa0&
var metavue_type_template_id_469beaa0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile',
          params: {
            username: _vm.article.author.username,
          },
        }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>\n        Follow Eric Simons\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.author.bio || 0)+")")+"</span></button>\n      \n    <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.author.favorited }))+"><i class=\"ion-heart\"></i>\n        Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)])}
var metavue_type_template_id_469beaa0_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/meta.vue?vue&type=template&id=469beaa0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      require: true
    }
  }
});
// CONCATENATED MODULE: ./pages/article/components/meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_metavue_type_script_lang_js_ = (metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_metavue_type_script_lang_js_,
  metavue_type_template_id_469beaa0_render,
  metavue_type_template_id_469beaa0_staticRenderFns,
  false,
  null,
  null,
  "47531ac6"
  
)

/* harmony default export */ var meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/comments.vue?vue&type=template&id=9855d91c&
var commentsvue_type_template_id_9855d91c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_vm._v("\n        "+_vm._s(comment.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,"MMM DD, YYYY")))+"</span>")],2)],2)})],2)}
var commentsvue_type_template_id_9855d91c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/comments.vue?vue&type=template&id=9855d91c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      // 文章列表
      text: ""
    };
  },

  async mounted() {
    const {
      data
    } = await Object(apis_article["f" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  },

  methods: {
    addComment() {
      Object(apis_article["a" /* addComment */])(this.article.slug, {
        comment: {
          body: this.text
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commentsvue_type_script_lang_js_ = (commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/comments.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var comments_component = Object(componentNormalizer["a" /* default */])(
  components_commentsvue_type_script_lang_js_,
  commentsvue_type_template_id_9855d91c_render,
  commentsvue_type_template_id_9855d91c_staticRenderFns,
  false,
  injectStyles,
  null,
  "fa0d29e8"
  
)

/* harmony default export */ var comments = (comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "Article",
  components: {
    ArticleMeta: meta,
    Comments: comments
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(apis_article["d" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        // 为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，利用 hid 键为 meta 标签配一个唯一的标识编号
        name: "description",
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0679f4d1"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map