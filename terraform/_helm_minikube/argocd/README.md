# UserName and Password:
Username: admin

Password: 
echo $(kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}") | base64 -d

kubectl port-forward svc/argo-argocd-server -n argocd  8080:443


# Delete ArgoCD CRDS:
kubectl delete crds applications.argoproj.io applicationsets.argoproj.io appprojects.argoproj.io
