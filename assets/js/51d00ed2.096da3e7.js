"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98066],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=["components"],s={title:"Working with Entity Manager",sidebar_label:"Entity Manager"},l=void 0,p={unversionedId:"entity-manager",id:"entity-manager",isDocsHomePage:!1,title:"Working with Entity Manager",description:"Persist and Flush",source:"@site/docs/entity-manager.md",sourceDirName:".",slug:"/entity-manager",permalink:"/docs/next/entity-manager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/entity-manager.md",tags:[],version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1638816975,formattedLastUpdatedAt:"12/6/2021",frontMatter:{title:"Working with Entity Manager",sidebar_label:"Entity Manager"},sidebar:"docs",previous:{title:"Modeling Entity Relationships",permalink:"/docs/next/relationships"},next:{title:"Unit of Work",permalink:"/docs/next/unit-of-work"}},u=[{value:"Persist and Flush",id:"persist-and-flush",children:[],level:2},{value:"Persisting and Cascading",id:"persisting-and-cascading",children:[],level:2},{value:"Fetching Entities with EntityManager",id:"fetching-entities-with-entitymanager",children:[{value:"Conditions Object (<code>FilterQuery&lt;T&gt;</code>)",id:"conditions-object-filterqueryt",children:[{value:"Using custom FilterQuery DTO",id:"using-custom-filterquery-dto",children:[],level:4},{value:"Mitigating <code>Type instantiation is excessively deep and possibly infinite.ts(2589)</code> error",id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error",children:[],level:4}],level:3},{value:"Searching by referenced entity fields",id:"searching-by-referenced-entity-fields",children:[],level:3},{value:"Fetching Partial Entities",id:"fetching-partial-entities",children:[],level:3},{value:"Fetching Paginated Results",id:"fetching-paginated-results",children:[],level:3},{value:"Handling Not Found Entities",id:"handling-not-found-entities",children:[],level:3},{value:"Using custom SQL fragments",id:"using-custom-sql-fragments",children:[],level:3}],level:2},{value:"Disabling identity map and change set tracking",id:"disabling-identity-map-and-change-set-tracking",children:[],level:2},{value:"Type of Fetched Entities",id:"type-of-fetched-entities",children:[],level:2},{value:"Entity Repositories",id:"entity-repositories",children:[],level:2},{value:"Custom Property Ordering",id:"custom-property-ordering",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"persist-and-flush"},"Persist and Flush"),(0,a.kt)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM:\n",(0,a.kt)("inlineCode",{parentName:"p"},"em.persist()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"em.flush()"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"em.persist(entity)")," is used to mark new entities for future persisting.\nIt will make the entity managed by given ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," and once ",(0,a.kt)("inlineCode",{parentName:"p"},"flush")," will be called, it\nwill be written to the database. "),(0,a.kt)("p",null,"To understand ",(0,a.kt)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if\nit\u2019s fetched from the database (via ",(0,a.kt)("inlineCode",{parentName:"p"},"em.find()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity)\nor registered as new through ",(0,a.kt)("inlineCode",{parentName:"p"},"em.persist()"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and\nperform according database queries. As an entity loaded from database becomes managed\nautomatically, you do not have to call persist on those, and flush is enough to update\nthem."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nbook.title = 'How to persist things...';\n\n// no need to persist `book` as its already managed by the EM\nawait orm.em.flush();\n")),(0,a.kt)("h2",{id:"persisting-and-cascading"},"Persisting and Cascading"),(0,a.kt)("p",null,"To save entity state to database, you need to persist it. Persist determines\nwhether to use ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\norm.em.persist(book1);\norm.em.persist(book2);\norm.em.persist(book3); \nawait orm.em.flush(); // flush everything to database at once\n")),(0,a.kt)("h2",{id:"fetching-entities-with-entitymanager"},"Fetching Entities with EntityManager"),(0,a.kt)("p",null,"To fetch entities from database you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"find()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findOne()")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),": "),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, '...id...');\nconst books = await orm.em.find(Book, {});\n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),(0,a.kt)("p",null,"To populate entity relations, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"populate")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const books = await orm.em.find(Book, { foo: 1 }, ['author.friends']);\n")),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"em.populate()")," helper to populate relations (or to ensure they\nare fully populated) on already loaded entities. This is also handy when loading\nentities via ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const authors = await orm.em.createQueryBuilder(Author).select('*').getResult();\nawait em.populate(authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")),(0,a.kt)("h3",{id:"conditions-object-filterqueryt"},"Conditions Object (",(0,a.kt)("inlineCode",{parentName:"h3"},"FilterQuery<T>"),")"),(0,a.kt)("p",null,"Querying entities via conditions object (",(0,a.kt)("inlineCode",{parentName:"p"},"where")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"em.find(Entity, where: FilterQuery<T>)"),")\nsupports many different ways:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// search by entity properties\nconst users = await orm.em.find(User, { firstName: 'John' });\n\n// for searching by reference you can use primary key directly\nconst id = 1;\nconst users = await orm.em.find(User, { organization: id });\n\n// or pass unpopulated reference (including `Reference` wrapper)\nconst ref = await orm.em.getReference(Organization, id);\nconst users = await orm.em.find(User, { organization: ref });\n\n// fully populated entities as also supported\nconst ent = await orm.em.findOne(Organization, id);\nconst users = await orm.em.find(User, { organization: ent });\n\n// complex queries with operators\nconst users = await orm.em.find(User, { $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\n// you can also search for array of primary keys directly\nconst users = await orm.em.find(User, [1, 2, 3, 4, 5]);\n\n// and in findOne all of this works, plus you can search by single primary key\nconst user1 = await orm.em.findOne(User, 1);\n")),(0,a.kt)("p",null,"As you can see in the fifth example, one can also use operators like ",(0,a.kt)("inlineCode",{parentName:"p"},"$and"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$or"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$gte"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"$gt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$lte"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$lt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$in"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$nin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$eq"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$ne"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$like"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$re"),". More about that can be found in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/next/query-conditions"},"Query Conditions")," section."),(0,a.kt)("h4",{id:"using-custom-filterquery-dto"},"Using custom FilterQuery DTO"),(0,a.kt)("p",null,"If you decide to abstract the filter options in your own object then you might run into the problem that the find option does not return the results you'd expect. This is due to the fact that the FilterQuery should be provided as a POJO (Plain Old JS Object ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("p",null,"If you want to provide your own FilterQuery DTO, then your DTO class should extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"PlainObject")," class. This way MikroORM knows it should be treated as such."),(0,a.kt)("h4",{id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error"},"Mitigating ",(0,a.kt)("inlineCode",{parentName:"h4"},"Type instantiation is excessively deep and possibly infinite.ts(2589)")," error"),(0,a.kt)("p",null,"Sometimes you might be facing TypeScript errors caused by too complex query for it to\nproperly infer all types. Usually it can be solved by providing the type argument\nexplicitly."),(0,a.kt)("p",null,"You can also opt in to use repository instead, as there the type inference should not be\nproblematic. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As a last resort, you can always type cast the query to ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const books = await orm.em.find<Book>(Book, { ... your complex query ... });\n// or\nconst books = await orm.em.getRepository(Book).find({ ... your complex query ... });\n// or\nconst books = await orm.em.find<any>(Book, { ... your complex query ... }) as Book[];\n")),(0,a.kt)("p",null,"Another problem you might be facing is ",(0,a.kt)("inlineCode",{parentName:"p"},"RangeError: Maximum call stack size exceeded")," error\nthrown during TypeScript compilation (usually from file ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/typescript/lib/typescript.js"),").\nThe solution to this is the same, just provide the type argument explicitly."),(0,a.kt)("h3",{id:"searching-by-referenced-entity-fields"},"Searching by referenced entity fields"),(0,a.kt)("p",null,"You can also search by referenced entity properties. Simply pass nested where condition like\nthis and all requested relationships will be automatically joined. Currently it will only join\nthem so you can search and sort by those. To populate entities, do not forget to pass the populate\nparameter as well. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// find author of a book that has tag specified by name\nconst author = await orm.em.findOne(Author, { books: { tags: { name: 'Tag name' } } });\nconsole.log(author.books.isInitialized()); // false, as it only works for query and sort\n\nconst author = await orm.em.findOne(Author, { books: { tags: { name: 'Tag name' } } }, ['books.tags']);\nconsole.log(author.books.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags[0].isInitialized()); // true, because it was populated\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature is fully available only for SQL drivers. In MongoDB always you need to\nquery from the owning side - so in the example above, first load book tag by name,\nthen associated book, then the author. Another option is to denormalize the schema.  ")),(0,a.kt)("h3",{id:"fetching-partial-entities"},"Fetching Partial Entities"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature is supported only for ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT_IN")," loading strategy.")),(0,a.kt)("p",null,"When fetching single entity, you can choose to select only parts of an entity via ",(0,a.kt)("inlineCode",{parentName:"p"},"options.fields"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, '...', { fields: ['name', 'born'] });\nconsole.log(author.id); // PK is always selected\nconsole.log(author.name); // Jon Snow\nconsole.log(author.email); // undefined\n")),(0,a.kt)("p",null,"From v4.4 it is also possible to specify fields for nested relations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, '...', { fields: ['name', 'books.title', 'books.author', 'books.price'] });\n")),(0,a.kt)("p",null,"Or with an alternative object syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, '...', { fields: ['name', { books: ['title', 'author', 'price'] }] });\n")),(0,a.kt)("p",null,"It is also possible to use multiple levels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, '...', { fields: ['name', { books: ['title', 'price', 'author', { author: ['email'] }] }] });\n")),(0,a.kt)("p",null,"Primary keys are always selected even if you omit them. On the other hand, you are responsible\nfor selecting the FKs - if you omit such property, the relation might not be loaded properly.\nIn the following example the books would not be linked the author, because we did not specify\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"books.author")," field to be loaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// this will load both author and book entities, but they won't be connected due to the missing FK in select\nconst author = await orm.em.findOne(Author, '...', { fields: ['name', { books: ['title', 'price'] });\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Same problem can occur in mongo with M:N collections - those are stored as array property\non the owning entity, so you need to make sure to mark such properties too.")),(0,a.kt)("h3",{id:"fetching-paginated-results"},"Fetching Paginated Results"),(0,a.kt)("p",null,"If you are going to paginate your results, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"em.findAndCount()")," that will return\ntotal count of entities before applying limit and offset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const [authors, count] = await orm.em.findAndCount(Author, { ... }, { limit: 10, offset: 50 });\nconsole.log(authors.length); // based on limit parameter, e.g. 10\nconsole.log(count); // total count, e.g. 1327\n")),(0,a.kt)("h3",{id:"handling-not-found-entities"},"Handling Not Found Entities"),(0,a.kt)("p",null,"When you call ",(0,a.kt)("inlineCode",{parentName:"p"},"em.findOne()")," and no entity is found based on your criteria, ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," will be\nreturned. If you rather have an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," instance thrown, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"em.findOneOrFail()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, { name: 'does-not-exist' });\nconsole.log(author === null); // true\n\ntry {\n  const author = await orm.em.findOneOrFail(Author, { name: 'does-not-exist' });\n  // author will be always found here\n} catch (e) {\n  console.error('Not found', e);\n}\n")),(0,a.kt)("p",null,"You can customize the error either globally via ",(0,a.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",(0,a.kt)("inlineCode",{parentName:"p"},"failHandler")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  const author = await orm.em.findOneOrFail(Author, { name: 'does-not-exist' }, {\n    failHandler: (entityName: string, where: Record<string, any> | IPrimaryKey) => new Error(`Failed: ${entityName} in ${util.inspect(where)}`)\n  });\n} catch (e) {\n  console.error(e); // your custom error\n}\n")),(0,a.kt)("h3",{id:"using-custom-sql-fragments"},"Using custom SQL fragments"),(0,a.kt)("p",null,"It is possible to use any SQL fragment in your ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," query or ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"expr()")," helper is an identity function - all it does is to return its parameter.\nWe can use it to bypass the strict type checks in ",(0,a.kt)("inlineCode",{parentName:"p"},"FilterQuery"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await orm.em.find(User, { [expr('lower(email)')]: 'foo@bar.baz' }, {\n  orderBy: { [`(point(loc_latitude, loc_longitude) <@> point(0, 0))`]: 'ASC' },\n});\n")),(0,a.kt)("p",null,"This will produce following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select `e0`.* \nfrom `user` as `e0`\nwhere lower(email) = 'foo@bar.baz'\norder by (point(loc_latitude, loclongitude) <@> point(0, 0)) asc\n")),(0,a.kt)("h2",{id:"disabling-identity-map-and-change-set-tracking"},"Disabling identity map and change set tracking"),(0,a.kt)("p",null,"Sometimes we might want to disable identity map and change set tracking for some query.\nThis is possible via ",(0,a.kt)("inlineCode",{parentName:"p"},"disableIdentityMap")," option. Behind the scenes, it will create new\ncontext, load the entities inside that, and clear it afterwards, so the main identity map\nwill stay clean."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As opposed to ",(0,a.kt)("em",{parentName:"p"},"managed")," entities, such entities are called ",(0,a.kt)("em",{parentName:"p"},"detached"),".\nTo be able to work with them, you first need to merge them via ",(0,a.kt)("inlineCode",{parentName:"p"},"em.registerManaged()"),". ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await orm.em.find(User, { email: 'foo@bar.baz' }, {\n  disableIdentityMap: true,\n  populate: { cars: { brand: true } },\n});\nusers[0].name = 'changed';\nawait orm.em.flush(); // calling flush have no effect, as the entity is not managed  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Keep in mind that this can also have\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/9259480/entity-framework-mergeoption-notracking-bad-performance"},"negative effect on the performance"),".")),(0,a.kt)("h2",{id:"type-of-fetched-entities"},"Type of Fetched Entities"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"em.find")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"em.findOne()")," methods have generic return types.\nAll of following examples are equal and will let typescript correctly infer the entity type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author1 = await orm.em.findOne<Author>(Author.name, '...id...');\nconst author2 = await orm.em.findOne<Author>('Author', '...id...');\nconst author3 = await orm.em.findOne(Author, '...id...');\n")),(0,a.kt)("p",null,"As the last one is the least verbose, it should be preferred. "),(0,a.kt)("h2",{id:"entity-repositories"},"Entity Repositories"),(0,a.kt)("p",null,"Although you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," directly, much more convenient way is to use\n",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/repositories/"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),". You can register\nyour repositories in dependency injection container like ",(0,a.kt)("a",{parentName:"p",href:"http://inversify.io/"},"InversifyJS"),"\nso you do not need to get them from ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," each time."),(0,a.kt)("p",null,"For more examples, take a look at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),(0,a.kt)("h2",{id:"custom-property-ordering"},"Custom Property Ordering"),(0,a.kt)("p",null,"Entity properties provide some support for custom ordering via the ",(0,a.kt)("inlineCode",{parentName:"p"},"customOrder")," attribute. This is\nuseful for values that have a natural order that doesn't align with their underlying data representation. Consider the code below, the natural sorting order would be ",(0,a.kt)("inlineCode",{parentName:"p"},"high"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"medium"),". However we can provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"customOrder")," to indicate how the enum values should be sorted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Priority { Low = 'low', Medium = 'medium', High = 'high' }\n@Entity()\nclass Task {\n  @PrimaryKey()\n  id!: number\n\n  @Property()\n  label!: string\n\n  @Enum({ \n    items: () => Priority, \n    customOrder: [Priority.Low, Priority.Medium, Priority.High] \n  })\n  priority!: Priority\n}\n\n// ...\n\nawait orm.em.persistAndFlush([\n  orm.em.create(Task, { label: 'A', priority: Priority.Low }),\n  orm.em.create(Task, { label: 'B', priority: Priority.Medium }),\n  orm.em.create(Task, { label: 'C', priority: Priority.High })\n]);\n\nconst tasks = await orm.em.find(Task, {}, { orderBy: { priority: QueryOrder.ASC } });\nfor (const t of tasks) {\n  console.log(t.label);\n}\n// Logs A, B, C\n")))}c.isMDXComponent=!0}}]);