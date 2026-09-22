export default function handler(req,res){
 const id=process.env.GITHUB_CLIENT_ID; if(!id)return res.status(500).send('Missing GITHUB_CLIENT_ID');
 const state=crypto.randomUUID(); res.setHeader('Set-Cookie',`oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
 const redirect=`https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(id)}&scope=repo&state=${state}`; res.redirect(redirect);
}
