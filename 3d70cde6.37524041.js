(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(11),r=(n(0),n(219)),i={id:"faq",title:"FAQ"},c={id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How can I customize/style my form fields?",source:"@site/../docs/faq.md",permalink:"/docs/faq",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Basic uniforms usage",permalink:"/docs/tutorials-basic-uniforms-usage"}},l=[{value:"How can I customize/style my form fields?",id:"how-can-i-customizestyle-my-form-fields",children:[]},{value:"How can I create custom fields?",id:"how-can-i-create-custom-fields",children:[]},{value:"How can I use a custom field in my form?",id:"how-can-i-use-a-custom-field-in-my-form",children:[]},{value:"How can I pass additional props to the custom field?",id:"how-can-i-pass-additional-props-to-the-custom-field",children:[]},{value:"How can I have a dynamic label? (e.g. handling i18n)",id:"how-can-i-have-a-dynamic-label-eg-handling-i18n",children:[]},{value:"How can I change the way my form validates?",id:"how-can-i-change-the-way-my-form-validates",children:[]},{value:"How can I reset my form state?",id:"how-can-i-reset-my-form-state",children:[]},{value:"I want my form to be prefilled with data. How can I do that?",id:"i-want-my-form-to-be-prefilled-with-data-how-can-i-do-that",children:[]},{value:"How can I transform my model?",id:"how-can-i-transform-my-model",children:[]},{value:"How can I make my form autofocused?",id:"how-can-i-make-my-form-autofocused",children:[]},{value:"How can I know a current form state?",id:"how-can-i-know-a-current-form-state",children:[]},{value:"I want to disable a submit button until there is a difference between the current form state and my model. How can I do it?",id:"i-want-to-disable-a-submit-button-until-there-is-a-difference-between-the-current-form-state-and-my-model-how-can-i-do-it",children:[]}],m={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"how-can-i-customizestyle-my-form-fields"},"How can I customize/style my form fields?"),Object(r.b)("p",null,"You can style your form fields simply by passing a ",Object(r.b)("inlineCode",{parentName:"p"},"className")," property."),Object(r.b)("h3",{id:"how-can-i-create-custom-fields"},"How can I create custom fields?"),Object(r.b)("p",null,"You can create a custom field by wrapping your component inside the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-helpers#connectfieldcomponent-options"}),Object(r.b)("inlineCode",{parentName:"a"},"connectField")),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"connectField")," will pass various props related to the form management, such as ",Object(r.b)("inlineCode",{parentName:"p"},"onChange()")," function, current field's value, errors and so on, to your component."),Object(r.b)("p",null,"Please visit the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials-creating-custom-field"}),"Tutorials > Creating a custom field")," tutorial to see how to create your own fields."),Object(r.b)("h3",{id:"how-can-i-use-a-custom-field-in-my-form"},"How can I use a custom field in my form?"),Object(r.b)("p",null,"You can tell your schema to use your custom field by adding the ",Object(r.b)("inlineCode",{parentName:"p"},"uniforms")," property."),Object(r.b)("p",null,"Example in JSONSchema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const schema = {\n  /*...*/\n  firstName: {\n    type: 'string',\n    uniforms: MyCustomFirstNameField\n  }\n  /*...*/\n};\n")),Object(r.b)("p",null,"We say that the component used for the ",Object(r.b)("inlineCode",{parentName:"p"},"firstName")," property will be the ",Object(r.b)("inlineCode",{parentName:"p"},"MyCustomFirstNameField"),"."),Object(r.b)("p",null,"You can also leave the schema untouched and pass your custom field directly to the ",Object(r.b)("inlineCode",{parentName:"p"},"AutoField")," in a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," property instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<AutoForm schema={schema} onSubmit={onSubmit}>\n  /*...*/\n  <AutoField component={MyCustomFirstNameField} name="firstName" />\n  /*...*/\n</AutoForm>\n')),Object(r.b)("h3",{id:"how-can-i-pass-additional-props-to-the-custom-field"},"How can I pass additional props to the custom field?"),Object(r.b)("p",null,"You can pass any additional props to your custom field, by converting the ",Object(r.b)("inlineCode",{parentName:"p"},"uniforms")," property to the type of object, with the ",Object(r.b)("inlineCode",{parentName:"p"},"component")," key. Any other keys will be treated as props."),Object(r.b)("p",null,"E.g. in JSONSchema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const schema = {\n  /*...*/\n  firstName: {\n    type: 'string',\n    uniforms: {\n      component: MyCustomFirstNameField,\n      propA: 1,\n      propB: 2\n    }\n  }\n  /*...*/\n};\n")),Object(r.b)("p",null,"We say that the component used for the ",Object(r.b)("inlineCode",{parentName:"p"},"firstName")," property will be the ",Object(r.b)("inlineCode",{parentName:"p"},"MyCustomFirstNameField")," and it will receive 2 additonal props: ",Object(r.b)("inlineCode",{parentName:"p"},"propA")," and ",Object(r.b)("inlineCode",{parentName:"p"},"propB"),"."),Object(r.b)("p",null,"You can also leave the schema untouched and pass your custom field with props directly to the ",Object(r.b)("inlineCode",{parentName:"p"},"AutoField")," instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<AutoForm schema={schema} onSubmit={onSubmit}>\n  /*...*/\n  <AutoField\n    component={MyCustomFirstNameField}\n    name="firstName"\n    propA={1}\n    propB={2}\n  />\n  /*...*/\n</AutoForm>\n')),Object(r.b)("h3",{id:"how-can-i-have-a-dynamic-label-eg-handling-i18n"},"How can I have a dynamic label? (e.g. handling i18n)"),Object(r.b)("p",null,"There are few ways to handle that, depending on the level of abstraction you want to do it - schema, field or ",Object(r.b)("inlineCode",{parentName:"p"},"AutoField")," component."),Object(r.b)("p",null,"On the ",Object(r.b)("strong",{parentName:"p"},"schema")," level, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"uniforms: {...}")," object property to pass extra props to the field.\nA function returning it (",Object(r.b)("inlineCode",{parentName:"p"},"uniforms: () => ({...})"),") is also accepted. With it, dynamic labels can be fetched from any source."),Object(r.b)("p",null,"On the ",Object(r.b)("strong",{parentName:"p"},"field")," level, you can prepare your own component set, where you will use ",Object(r.b)("inlineCode",{parentName:"p"},"<Translate>{label}</Translate>")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"{label}"),"."),Object(r.b)("p",null,"While the first one is schema-dependent and the second is theme-dependent, there's an additional option, somewhere in between. You can create a custom ",Object(r.b)("inlineCode",{parentName:"p"},"AutoField")," component, based on a builtin one, where you provide some additional props and label might be one of them (based on other props, like name or some schema field)."),Object(r.b)("h3",{id:"how-can-i-change-the-way-my-form-validates"},"How can I change the way my form validates?"),Object(r.b)("p",null,"Any form can be validated in one of those three styles:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"onChange"),"\nValidate on every change.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"onChangeAfterSubmit")," ",Object(r.b)("em",{parentName:"p"},"(default)"),"\nValidate on every change, but only after first submit.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"onSubmit"),"\nValidate on every submit."))),Object(r.b)("p",null,"You change the way your form validates by setting ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," prop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<AutoForm validate="onChange" schema={schema} onSubmit={onSubmit} />\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," If your schema validator accepts any options, those can be passed in ",Object(r.b)("inlineCode",{parentName:"p"},"validator")," prop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<AutoForm validator={validatorOptions} />\n")),Object(r.b)("h3",{id:"how-can-i-reset-my-form-state"},"How can I reset my form state?"),Object(r.b)("p",null,"You can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/more-about-refs.html"}),"React ",Object(r.b)("inlineCode",{parentName:"a"},"ref")," prop")," to manually access form methods."),Object(r.b)("p",null,"These methods are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"change(key, value)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reset()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"submit()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate()")," ",Object(r.b)("em",{parentName:"li"},"(added in ",Object(r.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const MyForm = ({ schema, onSubmit }) => {\n  let formRef;\n\n  return (\n    <section>\n      <AutoForm\n        ref={ref => (formRef = ref)}\n        schema={schema}\n        onSubmit={onSubmit}\n      />\n      <small onClick={() => formRef.reset()}>Reset</small>\n      <small onClick={() => formRef.submit()}>Submit</small>\n    </section>\n  );\n};\n")),Object(r.b)("p",null,"You can find more about form methods ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-forms"}),"here"),"."),Object(r.b)("h3",{id:"i-want-my-form-to-be-prefilled-with-data-how-can-i-do-that"},"I want my form to be prefilled with data. How can I do that?"),Object(r.b)("p",null,"You can pass the initial data to the form by using the ",Object(r.b)("inlineCode",{parentName:"p"},"model")," prop."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"model")," is an object with ",Object(r.b)("inlineCode",{parentName:"p"},"{field: value}")," structure. It doesn't matter if it has a prototype or not, but keep in mind that in ",Object(r.b)("inlineCode",{parentName:"p"},"onSubmit")," or in ",Object(r.b)("inlineCode",{parentName:"p"},"onChangeModel")," you'll receive a plain object. If you treat form as an input, then this is a value."),Object(r.b)("h3",{id:"how-can-i-transform-my-model"},"How can I transform my model?"),Object(r.b)("p",null,"You should ",Object(r.b)("inlineCode",{parentName:"p"},"modelTransform"),". It is a function transforming one model into another. It's used in a few situations (called 'modes') described below."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Remember not to mutate a given model!")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function transform(mode, model) {\n  // This model will be passed to the fields.\n  if (mode === 'form') {\n    /* ... */\n  }\n\n  // This model will be submitted.\n  if (mode === 'submit') {\n    /* ... */\n  }\n\n  // This model will be validated.\n  if (mode === 'validate') {\n    /* ... */\n  }\n\n  // Otherwise, return unaltered model.\n  return model;\n}\n\n<AutoForm modelTransform={transform} schema={schema} onSubmit={onSubmit} />;\n")),Object(r.b)("h3",{id:"how-can-i-make-my-form-autofocused"},"How can I make my form autofocused?"),Object(r.b)("p",null,"You can take a reference to the field and manually trigger ",Object(r.b)("inlineCode",{parentName:"p"},".focus()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<AutoField name="firstName" inputRef={field => field.focus()} />\n')),Object(r.b)("h3",{id:"how-can-i-know-a-current-form-state"},"How can I know a current form state?"),Object(r.b)("p",null,"A current form state is available in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React context"),", accessible through ",Object(r.b)("inlineCode",{parentName:"p"},"useForm")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useField(name)")," hooks."),Object(r.b)("p",null,"The context data consists of various properties which can be found in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-context-data"}),"here"),"."),Object(r.b)("h5",{id:"example-usage"},"Example usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function SubmittingState() {\n  const uniforms = useForm();\n  return uniforms.submitting ? 'Submitting...' : null;\n}\n\n<AutoForm>\n  <SubmittingState />\n</AutoForm>;\n")),Object(r.b)("h3",{id:"i-want-to-disable-a-submit-button-until-there-is-a-difference-between-the-current-form-state-and-my-model-how-can-i-do-it"},"I want to disable a submit button until there is a difference between the current form state and my model. How can I do it?"),Object(r.b)("p",null,"Basically, you have to find out whether there is a difference between a current form state and your model, e.g. by calling lodash's ",Object(r.b)("inlineCode",{parentName:"p"},"isEqual")," function.\nCurrent form state can be accessed through the context (see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/faq#how-can-i-know-a-current-form-state"}),"How can I know a current form state?"),") and form model can be passed as an ordinary prop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function DifferentSubmitField({ initialModel }) {\n  const { model } = useForm();\n  return <SubmitField disabled={isEqual(uniforms.model, initialModel)} />;\n}\n\nconst ChangedForm = ({ model }) => (\n  <AutoForm model={model}>\n    <DifferentSubmitField initialModel={model} />\n  </AutoForm>\n);\n")))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),s=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,p=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(p,c(c({ref:t},m),{},{components:n})):o.a.createElement(p,c({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<r;m++)i[m]=n[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);