export default async function handler(req,res){
 const {code,state}=req.query; const cookies=Object.fromEntries((req.headers.cookie||'').split(';').map(v=>v.trim().split('=')));
 if(!code||!state||state!==cookies.oauth_state)return res.status(400).send('Invalid OAuth state');
 const r=await fetch('https://github.com/login/oauth/access_token',{method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify({client_id:process.env.GITHUB_CLIENT_ID,client_secret:process.env.GITHUB_CLIENT_SECRET,code,state})}); const data=await r.json();
 if(!data.access_token)return res.status(401).send('GitHub authorization failed');
 const payload=JSON.stringify({token:data.access_token,provider:'github'}); res.setHeader('Content-Type','text/html'); res.send(`<!doctype html><script>(function(){function receive(e){window.opener.postMessage('authorization:github:success:${payload}',e.origin);window.close()}window.addEventListener('message',receive);window.opener.postMessage('authorizing:github','*')})()</script>`);
}
