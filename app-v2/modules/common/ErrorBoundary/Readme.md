based on React 16 Error Boundaries.
see [error-handling-in-react-16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) for more information.

<br>

### Examples

**Standard Use**
use tags around components where you want to set error boundary

```
<ErrorBoundary width={'100%'} height={'500px'} name={'Corrupt Component'}>
  <div>Corrupt component will throw an error </div>
  <Corrupt break={true}> </Corrupt>
</ErrorBoundary>
```

**Standard Use**
Example of the components that would not throw errors.

```
<ErrorBoundary width={'100%'} height={'500px'} name={'Corrupt Component'}>
  <div>Corrupt component will not throw an error</div>
  <Corrupt break={false}> </Corrupt>
</ErrorBoundary>
```