import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Temporary authentication (replace with proper auth later)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Login realizado com sucesso!");
    } else {
      toast.error("Senha incorreta!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Área Administrativa</CardTitle>
            <CardDescription>Digite a senha para acessar o painel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Senha padrão: admin123
                </p>
              </div>
              <Button type="submit" className="w-full bg-gradient-gold text-background">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Site
              </Button>
              <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIsAuthenticated(false);
                toast.info("Logout realizado");
              }}
            >
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
            <TabsTrigger value="stores">Unidades</TabsTrigger>
            <TabsTrigger value="history">História</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gerenciar Portfólio</CardTitle>
                    <CardDescription>
                      Adicione, edite ou remova fotos do portfólio
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-gold text-background">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Foto
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted rounded" />
                        <div>
                          <p className="font-semibold">Fade Degradê Premium</p>
                          <p className="text-sm text-muted-foreground">
                            Degradê baixo com finalização a navalha
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stores" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gerenciar Unidades</CardTitle>
                    <CardDescription>
                      Configure informações das unidades e links da Trinx
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-gold text-background">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Unidade
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {["Unidade Barra", "Unidade Recreio"].map((store, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{store}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor={`name-${i}`}>Nome da Unidade</Label>
                          <Input id={`name-${i}`} defaultValue={store} />
                        </div>
                        <div>
                          <Label htmlFor={`address-${i}`}>Endereço</Label>
                          <Input
                            id={`address-${i}`}
                            defaultValue="Av. das Américas, 5000 - Barra da Tijuca, Rio de Janeiro - RJ"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`phone-${i}`}>Telefone</Label>
                            <Input id={`phone-${i}`} defaultValue="(21) 3333-4444" />
                          </div>
                          <div>
                            <Label htmlFor={`hours-${i}`}>Horário</Label>
                            <Input
                              id={`hours-${i}`}
                              defaultValue="Seg-Sex: 9h às 20h"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor={`trinx-${i}`}>Link da Trinx</Label>
                          <Input
                            id={`trinx-${i}`}
                            defaultValue="https://trinx.com.br/barbearia-elite-barra"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            URL do sistema Trinx para agendamentos
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-gradient-gold text-background">
                          <Save className="w-4 h-4 mr-2" />
                          Salvar
                        </Button>
                        <Button variant="outline">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remover
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Editar História</CardTitle>
                <CardDescription>
                  Configure o texto da história da barbearia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="history">História da Barbearia</Label>
                  <Textarea
                    id="history"
                    rows={10}
                    defaultValue={`Fundada em 2015, a Barbearia Elite nasceu da paixão por transformar o cuidado masculino em uma experiência única e sofisticada.

O que começou como um pequeno espaço na Barra da Tijuca, rapidamente se tornou referência em cortes modernos e tratamentos de barba premium.

Em 2019, expandimos para o Recreio, levando nosso padrão de excelência para mais clientes que buscam não apenas um corte, mas uma verdadeira experiência de estilo e bem-estar.`}
                  />
                </div>
                <Button className="bg-gradient-gold text-background">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
