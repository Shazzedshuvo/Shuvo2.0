'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Project } from '@/lib/types';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export default function ProjectModal({
  project,
  projects,
  isOpen,
  onClose,
  onSelectProject
}: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      } else if (e.key === 'ArrowLeft') {
        navigate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project, projects]);

  if (!isOpen || !project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const navigate = (direction: number) => {
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = projects.length - 1;
    if (nextIndex >= projects.length) nextIndex = 0;
    onSelectProject(projects[nextIndex]);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-card rounded-3xl border border-black/10 dark:border-white/10 p-6 sm:p-8 bg-[#f8fafc]/95 dark:bg-[#0d0d0f]/95 shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
              {project.category}
            </span>
            {project.year && (
              <span className="text-xs text-[var(--muted)] font-mono">
                {project.year}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next navigation */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Previous project"
              className="p-2 rounded-full glass-panel hover:text-[#f59e0b] transition-colors cursor-pointer text-[var(--foreground)]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate(1)}
              aria-label="Next project"
              className="p-2 rounded-full glass-panel hover:text-[#f59e0b] transition-colors cursor-pointer text-[var(--foreground)]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full glass-panel hover:text-red-400 transition-colors cursor-pointer text-[var(--foreground)] ml-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Project Visual Banner */}
        <div className="relative mt-6 h-60 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-[var(--border)] group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-80" />

          {/* Quick Floating Actions */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-black text-xs font-bold transition-all shadow-lg"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live Preview
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-semibold hover:text-[#f59e0b] transition-all"
              >
                <FaGithub className="h-3.5 w-3.5" /> GitHub Repo
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              {project.title}
            </h2>
            <p className="text-sm font-semibold text-[#f59e0b] mt-1">
              {project.tagline}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)] mb-3">
                Key Architecture & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl glass-panel text-xs text-[var(--muted)]">
                    <CheckCircle2 className="h-4 w-4 text-[#f59e0b] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Badges */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium glass-panel border border-black/10 dark:border-white/10 hover:border-[#f59e0b]/30 text-[var(--foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
