### Create special namespace for app

We will use standard k8s

```bash
kubectl create namespace store-config
```

**Cheat-code**

To enable ui use:

```bash
minikube addons enable dashboard
minikube dashboard --url  127.0.0.1:6060
```
Then click on:
```bash
http://127.0.0.1:44103/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/
```

### Secrets

Init secrets for passing postgres secret from .env

```bash
kubectl create secret generic fastapi-secret --from-env-file=.env -n store-config
```

Check applied secrets
```bash
kubectl describe secret fastapi-secret -n store-config
```

### Deploy

Set local registry following https://stackoverflow.com/a/57535704/23813997 
```bash
docker tag store docker.local:5000/store
sudo docker run -d -p 5000:5000 --restart=always --name registry registry:2
sudo docker push docker.local:5000/store
```

Upload local image 


```bash
eval $(minikube docker-env) 
```


```bash
kubectl apply -f kubernetes/postgres.yaml
kubectl apply -f kubernetes/fastapi.yaml
```
Check ip:
```bash
kubectl get services -n store-config
```

Alternative is to upload images to 
https://hub.docker.com/settings/security, which takes bunch of time.

```
docker tag  mashalovne/score

```
I tried method [here](https://hub.docker.com/u/mashalovne).

Check deploy status:

```bash
kubectl get pods -n store-config
```

Debug with https://kubernetes.io/ru/docs/reference/kubectl/cheatsheet/

```bash
kubectl get pod fastapi-postgres-0 
```


CrashLoopBackOff

### Check

```bash
minikube service fastapi-service --namespace=my-cool-app
```

### Load analysis

https://github.com/rakyll/hey

Installation for linux

```bash
wget -O hey  https://hey-release.s3.us-east-2.amazonaws.com/hey_linux_amd64
chmod +x
sudo mv ./hey_linux_amd64 /usr/local/bin/hey
```
Check hey

```bash
hey -n 1000 -c 50 YOUR_URL
```


### Delete all

```bash
minikube delete --all --purge
```