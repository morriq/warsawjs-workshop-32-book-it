(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(9),r=a.n(s),o=a(40),l=a.n(o),c=a(39);const g=i.a.memo(({classes:e,price:t})=>i.a.createElement("div",{className:e.price},i.a.createElement(l.a,{variant:"h6",gutterBottom:!0},"Price"),i.a.createElement(l.a,{variant:"button",gutterBottom:!0},"".concat(t.amount," ").concat(t.currency)),i.a.createElement(l.a,{variant:"overline",gutterBottom:!0},t.breakfast?i.a.createElement("span",null,"Breakfast included"):i.a.createElement("span",null,"Breakfast not included"))));g.propTypes={classes:r.a.object,price:r.a.object},t.a=Object(c.withStyles)(e=>({price:{marginTop:e.spacing.unit}}))(g)},185:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(9),r=a.n(s),o=a(161),l=a.n(o),c=a(186),g=a.n(c),h=a(40),m=a.n(h),u=a(39);const d={avatar:{backgroundColor:g.a[600]}},p=i.a.memo(({classes:e,rating:t})=>i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",gutterBottom:!0},"Good"),i.a.createElement(l.a,{className:e.avatar},t.average),i.a.createElement(m.a,{variant:"overline",gutterBottom:!0},"".concat(t.reviews," reviews"))));p.propTypes={classes:r.a.object,rating:r.a.object},t.a=Object(u.withStyles)(d)(p)},187:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(9),r=a.n(s),o=a(145),l=a.n(o),c=a(164),g=a.n(c),h=a(169),m=a.n(h),u=a(167),d=a.n(u),p=a(168),C=a.n(p),v=a(166),E=a.n(v),S=a(162),b=a.n(S),f=a(223),R=a.n(f);const w=i.a.memo(({id:e,open:t,onClose:a,onOpen:n})=>i.a.createElement("div",null,i.a.createElement(b.a,{"aria-label":"Share",onClick:()=>n(e)},i.a.createElement(R.a,null)),i.a.createElement(g.a,{open:t,onClose:a,"aria-labelledby":"responsive-dialog-title"},i.a.createElement(E.a,{id:"responsive-dialog-title"},"Copy this link and share!"),i.a.createElement(d.a,null,i.a.createElement(C.a,null,"".concat(window.location.origin,"/details?id=").concat(e))),i.a.createElement(m.a,null,i.a.createElement(l.a,{onClick:a,color:"primary",autoFocus:!0},"Close")))));w.propTypes={classes:r.a.object,rating:r.a.object},t.a=w},435:function(e,t,a){"use strict";a.r(t);var n=a(234),i=a(0),s=a.n(i),r=a(12),o=a(156),l=a(433),c=a(380),g=a.n(c),h=a(392),m=a.n(h),u=a(394),d=a.n(u),p=a(145),C=a.n(p),v=a(214),E=a.n(v),S=a(176),b=a.n(S),f=a(198),R=a.n(f),w=a(62),y=a.n(w),F=a(200),P=a.n(F),O=a(40),k=a.n(O),j=a(39);const x="https://warsawjs-workshop-32-book-it-m.herokuapp.com";var I=Object(j.withStyles)(e=>({textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},button:{margin:e.spacing.unit},suggestionsContainer:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:e.zIndex.appBar,marginTop:-1*e.spacing.unit,left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"}}))(class extends s.a.PureComponent{constructor(...e){super(...e),this.state={suggestions:[]},this.handleSuggestionsFetchRequested=(({value:e})=>{fetch("".concat(x,"/suggestions?search=").concat(e)).then(e=>{e.json().then(({suggestions:e})=>{this.setState({suggestions:e})})})}),this.handleSuggestionsClearRequested=(()=>{this.setState({suggestions:[]})})}getSuggestionValue(e){return e.label}renderSuggestion(e,{query:t,isHighlighted:a}){const n=m()(e.label,t),i=d()(e.label,n);return s.a.createElement(R.a,{selected:a,component:"div"},s.a.createElement("div",null,i.map((e,t)=>e.highlight?s.a.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):s.a.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text))))}renderInputComponent(e){const t=e.classes,a=e.inputRef,n=void 0===a?()=>{}:a,i=e.ref,r=Object(l.a)(e,["classes","inputRef","ref"]);return s.a.createElement(P.a,Object.assign({fullWidth:!0,margin:"normal",variant:"outlined",InputProps:{inputRef:e=>{i(e),n(e)},classes:{input:t.input}}},r))}render(){const e=this.props,t=e.classes,a=e.filters,n=e.onSearch,i=e.onSearchChange,r=e.onFiltersCentreChange,o=e.onFiltersPriceChange,l=e.onFiltersMinAvgRatingChange,c=e.onFiltersMinReviewsCountChange;return s.a.createElement(b.a,{item:!0,xs:3},s.a.createElement("div",{className:t.toolbar},s.a.createElement(k.a,{variant:"h6"},"Search"),s.a.createElement(E.a,null,s.a.createElement(g.a,{renderSuggestion:this.renderSuggestion,getSuggestionValue:this.getSuggestionValue,renderInputComponent:this.renderInputComponent,suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,inputProps:{classes:t,placeholder:"Destination",value:a.searchPhrase,onChange:i},theme:{container:t.suggestionsContainer,suggestionsContainerOpen:t.suggestionsContainerOpen,suggestionsList:t.suggestionsList,suggestion:t.suggestion},renderSuggestionsContainer:e=>s.a.createElement(y.a,Object.assign({},e.containerProps,{square:!0}),e.children)}),s.a.createElement(C.a,{onClick:n,variant:"outlined",color:"primary",className:t.button},"Search"),s.a.createElement(P.a,{id:"centre",label:"Max. centre distance",className:t.textField,value:a.centre,onChange:r,margin:"normal",variant:"outlined",type:"number",inputProps:{step:1,min:0}}),s.a.createElement(P.a,{id:"minPrice",label:"Min. price",className:t.textField,value:a.minPrice,onChange:o,margin:"normal",variant:"outlined",type:"number",inputProps:{step:100,min:0}}),s.a.createElement(P.a,{id:"minAvgRating",label:"Min. average rating",className:t.textField,value:a.minAvgRating,onChange:l,margin:"normal",variant:"outlined",type:"number",inputProps:{step:1,min:0}}),s.a.createElement(P.a,{id:"minReviewsCount",label:"Min. reviews count",className:t.textField,value:a.minReviewsCount,onChange:c,margin:"normal",variant:"outlined",type:"number",inputProps:{step:10,min:0}}),s.a.createElement(C.a,{onClick:n,variant:"outlined",color:"primary",className:t.button},"Search"))))}}),N=a(171),M=a.n(N),A=a(174),D=a.n(A),L=a(173),T=a.n(L),B=a(172),q=a.n(B),V=a(217),W=a.n(V),_=a(170),G=a.n(_),J=a(216),z=a.n(J),X=a(215),H=a.n(X),K=a(184),Q=a(185),U=a(187);var Y=Object(j.withStyles)(e=>({card:{maxWidth:"100%"},sortingTabs:{flexGrow:1},media:{height:0,paddingTop:"30%"},actions:{display:"flex"},floatRight:{marginLeft:"auto"},accommodations:{marginRight:e.spacing.unit}}))(({classes:e,accommodations:t,shareId:a,sorting:n,onDetails:i,onSortingChange:r,onShareDialogClose:o,onShareDialogOpen:l})=>s.a.createElement(b.a,{item:!0,xs:9},t.errors?s.a.createElement(k.a,{variant:"body1"},t.errors):s.a.createElement(s.a.Fragment,null,t.fetching?s.a.createElement(G.a,{size:"100%",thickness:2}):s.a.createElement(s.a.Fragment,null,t.data&&0===t.data.length&&s.a.createElement(k.a,{variant:"h3"},"No results found"),t.data&&t.data.length>0&&s.a.createElement("div",{className:e.accommodations},s.a.createElement(k.a,{variant:"h3"},"".concat(t.data.length," results found")),s.a.createElement(y.a,{className:e.sortingTabs},s.a.createElement(H.a,{value:n,onChange:r,indicatorColor:"primary",textColor:"primary",centered:!0},s.a.createElement(z.a,{label:"Best rated"}),s.a.createElement(z.a,{label:"Most reviewed"}),s.a.createElement(z.a,{label:"Cheapest"}),s.a.createElement(z.a,{label:"Most expensive"}))),t.data.map((t,n)=>s.a.createElement(M.a,{className:e.card,key:n},s.a.createElement(q.a,{avatar:s.a.createElement(Q.a,{rating:t.rating}),action:s.a.createElement(K.a,{price:t.price}),title:t.title,subheader:t.location.centre+" - "+t.location.address}),s.a.createElement(W.a,{className:e.media,image:t.cover.url,title:t.title}),s.a.createElement(T.a,null,t.insights.map((e,t)=>s.a.createElement(k.a,{key:t,component:"p"},e.text))),s.a.createElement(D.a,{className:e.actions,disableActionSpacing:!0},s.a.createElement(U.a,{id:t.id,open:a===t.id,onClose:o,onOpen:l}),s.a.createElement(C.a,{"aria-label":"Details",className:e.floatRight,onClick:()=>i(t.id)},"Details")))))))));const Z="https://warsawjs-workshop-32-book-it-m.herokuapp.com",$=["MAX_AVG_RATING","MAX_REVIEWS","MIN_PRICE","MAX_PRICE"];t.default=Object(r.e)(class extends s.a.PureComponent{constructor(...e){super(...e),this.state={accommodations:{data:null,fetching:!1,errors:null},sorting:0,filters:{searchPhrase:"",centre:"",minPrice:"",minAvgRating:"",minReviewsCount:""},shareId:""},this.fetchList=(()=>{const e=this.state,t=e.filters,a=e.sorting,n=e.accommodations,i=t.searchPhrase,s=t.centre,r=t.minPrice,o=t.minAvgRating,l=t.minReviewsCount,c="?search=".concat(i,"&centre=").concat(s,"&minPrice=").concat(r,"&minAvgRating=").concat(o,"&minReviewsCount=").concat(l,"&sorting=").concat($[a]);localStorage.setItem("filters",JSON.stringify(t)),localStorage.setItem("sorting",a),this.setState({accommodations:{data:n.data,fetching:!0,errors:null}}),fetch("".concat(Z,"/list").concat(c)).then(e=>{e.json().then(({list:e})=>{this.setState({accommodations:{data:e,fetching:!1,errors:null}})},e=>{this.setState({accommodations:{data:null,fetching:!1,errors:e.message}})})})}),this.handleSortingChange=((e,t)=>{this.setState({sorting:t},this.fetchList)}),this.handleShareDialogOpen=(e=>{this.setState({shareId:e})}),this.handleShareDialogClose=(()=>{this.setState({shareId:""})}),this.handleFiltersChange=(e=>{this.setState({filters:e})}),this.handleSearchChange=((e,{newValue:t}={})=>{this.handleFiltersChange(Object(n.a)({},this.state.filters,{searchPhrase:t||e.target.value}))}),this.handleFiltersCentreChange=(e=>{this.handleFiltersChange(Object(n.a)({},this.state.filters,{centre:e.target.value}))}),this.handleFiltersPriceChange=(e=>{this.handleFiltersChange(Object(n.a)({},this.state.filters,{minPrice:e.target.value}))}),this.handleFiltersMinAvgRatingChange=(e=>{this.handleFiltersChange(Object(n.a)({},this.state.filters,{minAvgRating:e.target.value}))}),this.handleFiltersMinReviewsCountChange=(e=>{this.handleFiltersChange(Object(n.a)({},this.state.filters,{minReviewsCount:e.target.value}))}),this.handleDetails=(e=>{this.props.history.push("/details?id=".concat(e))})}componentDidMount(){const e=JSON.parse(localStorage.getItem("filters"))||{},t=localStorage.getItem("sorting")||$[0];this.setState({filters:{centre:e.centre||"",minAvgRating:e.minAvgRating||"",minPrice:e.minPrice||"",minReviewsCount:e.minReviewsCount||"",searchPhrase:e.searchPhrase?e.searchPhrase:""},sorting:$.indexOf(t)<0?0:$.indexOf(t)},this.fetchList)}render(){const e=this.state,t=e.shareId,a=e.filters,n=e.accommodations,i=e.sorting;return s.a.createElement(o.a,{container:!0},s.a.createElement(I,{filters:a,onSearch:this.fetchList,onSearchChange:this.handleSearchChange,onFiltersCentreChange:this.handleFiltersCentreChange,onFiltersPriceChange:this.handleFiltersPriceChange,onFiltersMinAvgRatingChange:this.handleFiltersMinAvgRatingChange,onFiltersMinReviewsCountChange:this.handleFiltersMinReviewsCountChange}),s.a.createElement(Y,{accommodations:n,shareId:t,sorting:i,onDetails:this.handleDetails,onSortingChange:this.handleSortingChange,onShareDialogClose:this.handleShareDialogClose,onShareDialogOpen:this.handleShareDialogOpen}))}})}}]);
//# sourceMappingURL=7.0da27d49.chunk.js.map