# Note to future self
Please include
```javascrpit
mres.setHeader('Access-Control-Allow-Origin', '*');
```
in Server/index.tsx in ```_processDeltaRequest``` in the metro module because you're having problem on school wifi with CORS and bundling
