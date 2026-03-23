export function base(url){
    return import.meta.env.BASE_URL + url.replace(/^\//, '')
}