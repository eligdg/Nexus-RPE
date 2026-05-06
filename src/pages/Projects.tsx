import { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreVertical,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  GripVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

type Column = 'todo' | 'in-progress' | 'review' | 'done';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: Column;
  dueDate: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Migración de Base de Datos', description: 'Pasar de SQLite a PostgreSQL en producción.', priority: 'high', status: 'in-progress', dueDate: '2026-05-10' },
  { id: '2', title: 'Diseño de Dashboard', description: 'Crear prototipo en Figma para el nuevo panel.', priority: 'medium', status: 'done', dueDate: '2026-05-02' },
  { id: '3', title: 'Integración Pasarela Pagos', description: 'Configurar Stripe para cobro de facturas.', priority: 'high', status: 'todo', dueDate: '2026-05-15' },
  { id: '4', title: 'Documentación API', description: 'Actualizar Swagger con los nuevos endpoints.', priority: 'low', status: 'review', dueDate: '2026-05-20' },
  { id: '5', title: 'Optimización de Carga', description: 'Reducir el bundle size del frontend.', priority: 'medium', status: 'in-progress', dueDate: '2026-05-12' },
];

const priorityColors = {
  low: 'text-blue-500 bg-blue-50 border-blue-100',
  medium: 'text-yellow-500 bg-yellow-50 border-yellow-100',
  high: 'text-red-500 bg-red-50 border-red-100',
};

export function ProjectsPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns: { id: Column, title: string, icon: any }[] = [
    { id: 'todo', title: 'Por hacer', icon: Clock },
    { id: 'in-progress', title: 'En curso', icon: AlertCircle },
    { id: 'review', title: 'Revisión', icon: EyeIcon },
    { id: 'done', title: 'Hecho', icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
          <p className="text-muted-foreground">Tablero Kanban de tareas y seguimiento de proyectos.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Tablero</Button>
            <Button variant="ghost">Lista</Button>
            <Button className="gap-2">
            <Plus size={18} />
            Nueva Tarea
            </Button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-x-auto pb-4">
        <div className="flex gap-4 h-full min-w-[1200px]">
          {columns.map((column) => (
            <div key={column.id} className="w-80 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2 bg-muted/50 p-2 rounded-lg border">
                <div className="flex items-center gap-2">
                  <column.icon size={18} className="text-muted-foreground" />
                  <span className="font-semibold text-sm uppercase tracking-wider">{column.title}</span>
                  <Badge variant="secondary" className="ml-1">{tasks.filter(t => t.status === column.id).length}</Badge>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus size={14} />
                </Button>
              </div>

              <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                {tasks.filter(t => t.status === column.id).map((task) => (
                  <motion.div
                    layoutId={task.id}
                    key={task.id}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="shadow-sm border border-border group-hover:border-primary/30 transition-colors cursor-grab active:cursor-grabbing">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className={priorityColors[task.priority]}>
                            {task.priority.toUpperCase()}
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical size={14} />
                          </Button>
                        </div>
                        <h3 className="font-medium text-sm leading-tight">{task.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
                        <div className="pt-2 flex items-center justify-between border-t border-dashed">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            {task.dueDate}
                          </div>
                          <div className="h-6 w-6 rounded-full bg-muted border flex items-center justify-center text-[10px] font-bold">
                            U
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EyeIcon({ size, className }: { size: number, className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
        </svg>
    )
}
